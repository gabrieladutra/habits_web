const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01', '01-02', '01-06'],
    water: ['01-04', '01-05'],
    food: ['01-01', '01-03'],
    gym: ['01-01', '01-02', '01-03', '01-04', '01-05'],
    sleep: ['01-01', '01-02', '01-03', '01-04', '01-05'],
    cat: ['01-01', '01-02', '01-06'],
    healthyFood: ['01-01', '01-02', '01-03', '01-06'],

}
nlwSetup.setData(data)
nlwSetup.load()