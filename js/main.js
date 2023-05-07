const form = document.querySelector('.form');
const tower = document.getElementById('tower');
const floor = document.getElementById('floor');
const meet = document.getElementById('meet');
const input = document.getElementById('input');
const textarea = document.getElementById('textarea');
const btnAdd = document.querySelector('.btn__add');
const btnDel = document.querySelector('.btn__del');

let currentDate;

const date = new AirDatepicker('#input', {
  timepicker: true,
  minutesStep: 5,
  onSelect: ({ date, formattedDate, datepicker }) => {
    currentDate = formattedDate;
  },
});

(() => {
  //инициализация селекта с этажами
  for (let i = 3; i <= 27; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Этаж ${i}`;
    floor.append(option);
  }
  //инициализация селекта с переговорными
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Переговорная ${i}`;
    meet.append(option);
  }
})();

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();

  const obj = {
    tower: tower.value,
    floor: floor.value,
    meet: meet.value,
    comment: textarea.value,
    date: currentDate,
  };

  console.log(JSON.stringify(obj));
});

btnDel.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
});
