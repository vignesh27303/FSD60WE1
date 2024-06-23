class person{
    constructor (name,sex,fatherName,motherName,maritalStatus = "Single",qualification,company,designation){
        this.name = name
        this.sex  = sex
        this.fatherName = fatherName
        this.motherName = motherName
        this.maritalStatus = maritalStatus
        this.qualification = qualification
        this.company = company
        this.designation = designation
        
    }
}

var Details = new person("Vignesh","M","Raju","Chandrika","Single","B.E","HCL","Technical Archietect")

console.log(Details)