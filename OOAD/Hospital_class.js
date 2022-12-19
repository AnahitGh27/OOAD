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
        console.log(`Name - ${this.name} \nAddress - ${this.address} \nPhone - ${this.phone}`)
    }
    addDepartment(department) {
        this.departments.push(department); 
    }
    getDepartmentsList() {
        console.log(this.departments);
    }
    addPatient(patient) {
        this.patients.push(patient);
    }
    getPatientsList() {
        console.log(this.patients);
    }
}




