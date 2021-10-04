import { IResume } from './../types';
import { action } from "mobx"

class Resume {
    resume = {} as IResume;

    @action updateProperty(props: any){
        this.resume = Object.assign(this.resume, props);
    }
}

const resInstance = new Resume();

export default resInstance;