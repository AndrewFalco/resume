import { IResume } from './../types';
import { action, makeAutoObservable, observable } from "mobx"
import { defaultRes } from "../constants"

class Resume {
    @observable resume = defaultRes() as IResume;
    @observable resumes: IResume[]=[];
    constructor() {
        //тут возникает прблема
        //после отработки makeAutoObservable свойства resume  и resumes принимают тип Proxy
        makeAutoObservable(this);
    }

    @action addResume(){
        this.resumes.push(this.resume);
    }

    @action updateProperty(props: any){
        this.resume = Object.assign(this.resume, props);
    }

    @action removeResume(id: string){
        this.resumes = this.resumes.filter(el=> el.id !== id);
    }
}

const resInstance = new Resume();

export default resInstance;