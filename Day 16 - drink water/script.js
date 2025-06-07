const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const TOTAL_CUPS = smallCups.length;
const CUP_VOLUME_LITERS = 0.25;
const GOAL_LITERS = 2;
const BIG_CUP_HEIGHT_PX = 330;

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => toggleCups(idx));
});

function toggleCups(index) {
  const isLastFull = smallCups[index].classList.contains('full') &&
                     (index === TOTAL_CUPS - 1 || !smallCups[index + 1].classList.contains('full'));

  const newIndex = isLastFull ? index - 1 : index;

  smallCups.forEach((cup, idx) => {
    cup.classList.toggle('full', idx <= newIndex);
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCupsCount = document.querySelectorAll('.cup-small.full').length;
  const percentageFilled = fullCupsCount / TOTAL_CUPS;
  const drankLiters = fullCupsCount * CUP_VOLUME_LITERS;
  const remainingLiters = GOAL_LITERS - drankLiters;

  if (fullCupsCount === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
    percentage.innerText = '';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${percentageFilled * BIG_CUP_HEIGHT_PX}px`;
    percentage.innerText = `${Math.round(percentageFilled * 100)}%`;
  }

  if (fullCupsCount === TOTAL_CUPS) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
    liters.innerText = '';
  } else {
    remained.style.visibility = 'visible';
    remained.style.height = 'auto';
    liters.innerText = `${remainingLiters.toFixed(2)}L`;
  }
}
