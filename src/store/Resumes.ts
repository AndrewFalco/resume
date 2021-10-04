import { IResume } from './../types';
import { action, makeAutoObservable, observable } from "mobx"

class Resumes {
    @observable resumes: IResume[]=[];

    constructor() {
        makeAutoObservable(this)
    }

    @action.bound addResume(resume: IResume){
        this.resumes.push({...resume});
    }

    @action removeResume(id: string){
        this.resumes = this.resumes.filter(el=> el.id !== id);
    }
}

const resInstance = new Resumes();

export default resInstance;