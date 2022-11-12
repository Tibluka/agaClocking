export class Shifts {
    shifts: Array<any> = [];
}

export class Shift {
    activity: string = '';
    endShift: Date | any;
    startShift: Date | any;
    finished: boolean = false;
    project: string = '';
    userId: number = 0;
    _id: ObjectId = new ObjectId();
}

export class ObjectId {
    $oid: string = '';
}