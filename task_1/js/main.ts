interface Teacher {
   readonly firstName: string,
   readonly lastName: string,
   firstTimeEmployee: boolean,
   yearsOfExperience?: number,
   location: string,
   [key: string]: any;
}

interface Doctors extends Teacher {
    numberOfReports: number;
}