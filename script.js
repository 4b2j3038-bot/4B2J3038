const countdown = document.getElementById('day');
const nextShow = new Date(2026, 11, 5);
const today = new Date();
today.setHours(0, 0, 0, 0);

const daysRemaining = Math.round((nextShow - today) / (1000 * 60 * 60 * 24));

if (daysRemaining > 0) {
    countdown.textContent = `距離下一場演出還有 ${daysRemaining} 天`;
} else if (daysRemaining === 0) {
    countdown.textContent = '今天演出，現場見！';
} else {
    countdown.textContent = '本次巡演已啟程，期待現場再見。';
}