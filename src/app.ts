import {BarcodeReader} from './barcode.js';

class App {
    private _barcodeReader: BarcodeReader; 
    private _sourceSelect: HTMLSelectElement;
    private _result: HTMLTextAreaElement;
    private _audio: AudioContext;

    constructor() {
        this._barcodeReader = new BarcodeReader();   
        this._audio=new AudioContext()
    }

    private changedVideoInputDevice(event) {
        this._barcodeReader.sourceDeviceId  = this._sourceSelect.value;
        this.decode();
    }

    private showVideoInputDevices(devices: any) {
       
        if (devices.length==0) {
            return;
        }

 
        let idx: number= 0;
        devices.forEach((element) => {              
           if (element.label.toUpperCase().indexOf('BACK')>=0) {
               idx = element.deviceId;
            }
          
            let sourceOption = document.createElement('option')
            sourceOption.text = element.label;
            sourceOption.value = element.deviceId;
            this._sourceSelect.appendChild(sourceOption)
        });
    /*    let sourceOption = document.createElement('option')
        sourceOption.text ="otro";
        sourceOption.value = "00x";
        this._sourceSelect.appendChild(sourceOption)

    */    
        this._sourceSelect.selectedIndex = idx;
        this._barcodeReader.sourceDeviceId = devices[idx].deviceId;
   //     this._sourceSelect.addEventListener('cnange', this.changedVideoInputDevice.bind(this));
        this._sourceSelect.onchange = this.changedVideoInputDevice.bind(this);
        setTimeout(this.decode.bind(this), 1500);
    }

    private decode(): void {
       this._barcodeReader.decode(this.decoded.bind(this));
     //  this.decoded("12"+Math.trunc(Math.random()*3));
    }

    

private beep(vol=60, freq=520, duration=200){
  let v=this._audio.createOscillator();
  let u=this._audio.createGain();
  v.connect(u);
  v.frequency.value=freq
  v.type="square"
  u.connect(this._audio.destination)
  u.gain.value=vol*0.01;
  v.start(this._audio.currentTime)
  v.stop(this._audio.currentTime+duration*0.001)
}


    private decoded(code: string): void {
        console.log(code);
        let codigos: Array<string> = this._result.value.split("\n");
        if (codigos.indexOf(code) < 0) {
            if (this._result.value.length>0) {
                this._result.value = code + "\n" + this._result.value;
            } else {
                this._result.value = code;
            }
        }
        this.beep();
        navigator.vibrate(200);
        setTimeout(this.decode.bind(this), 1500);
    }

    private init(): void { 
       this._sourceSelect = document.getElementById('sourceSelect') as HTMLSelectElement;
       this._result = document.getElementById('code') as HTMLTextAreaElement;
       document.getElementById('decode').addEventListener('click', this.decode.bind(this));
       
       this._barcodeReader.getVideoInputDevices(this.showVideoInputDevices.bind(this));
  

      
    }

    main() {
        document.addEventListener("DOMContentLoaded", this.init.bind(this));
    }
}

let app: App = new App();
app.main();


