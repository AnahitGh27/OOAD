//hospital class
class Hospital 
{
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.departments = [];
        this.patients = [];
    }
    getFullInfoAboutHospital() {
        return `Name - ${this.name} \nAddress - ${this.address} \nPhone - ${this.phone}`;
    }
    addDepartment(department) {
        this.departments.push(department); 
    }
    getDepartmentsList() {
        return this.departments;
    }
    addPatient(patient) {
        this.patients.push(patient);
    }
    getPatientsList() {
        return this.patients;
    }
}




