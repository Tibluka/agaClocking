export class Projects {
    projects: Array<Project> = [];
}

export class Project {
    _id: ObjectId = new ObjectId();
    projectName: string = '';
    active: boolean = false;
    dateHourCreated: Date;
}

export class ObjectId {
    $oid: string = '';
}