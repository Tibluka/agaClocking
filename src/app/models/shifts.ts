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
    overnight: boolean = false;
    _id: ObjectId = new ObjectId();
    totalTimeInMinutes: number = 0;
    total: any;
}

export class ObjectId {
    $oid: string = '';
}