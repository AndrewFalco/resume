import { IResume } from './../types';
import { action, makeAutoObservable, observable } from "mobx"

class Resumes {
    @observable resumes: IResume[]=[];
    @observable isDone = true;

    constructor() {
        makeAutoObservable(this)
    }

    @action.bound addResume(resume: IResume){
        this.resumes.push({...resume});
    }

    @action removeResume(id: string){
        this.resumes = this.resumes.filter(el=> el.id !== id);
    }

    @action changeDone(){
        this.isDone = !this.isDone;
    }
}

const resInstance = new Resumes();

export default resInstance;