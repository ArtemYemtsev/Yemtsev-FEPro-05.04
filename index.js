let year = prompt(`Введіть рік народження? (YYYY)`);
if (year !== null && year.trim() !== '' && !isNaN( +year )){
    let now = new Date;
    year = now.getFullYear()-year;
    if (year > 100 || year < 0){
        year = `Отакої. Або ти ще не народився, або ти Дункан Маклауд. =)`;
    } else {
        year = `Ваш вік ${year}`;
    }

    let city = prompt(`В я кому місті Ви живете?`);
    if (city !== null && city.trim() !== '' && !Number.isInteger( +city)){
        switch (city){
            case 'Київ':
                city = 'Ви живете у столиці України';
                break;
            case 'Вашингтон':
                city = 'Ви живете у столиці США';
                break;
            case 'Лондон':
                city = 'Ви живете у столиці Великої Британії';
                break;
            default:
                city = `Ви живете у місті ${city}`;
        }
        
        let sport = prompt(`Напишіть улюблений вид спорту?`);
        if (sport !== null && sport.trim() !== '' && !Number.isInteger( +sport)) {
            switch (sport){
                case 'футбол':
                    sport = `Круто! Хочеш стати Месі`;
                    break;
                case 'бокс':
                    sport = `Круто! Хочеш стати Клічко`;
                    break;
                case 'гонки':
                    sport = `Круто! Хочеш стати Шумахером`;
                    break;
                default:
                    sport = `Ваш улюблений вид спорту ${sport}`;
            }

            // Output user info
            alert(`${year}\n${city}\n${sport}`);

        } else {
            alert(`Шкода, що Ви не захотіли ввести назву улюбленного спорту. Оновіть сторінку (F5) та спробуйте ще раз.`);
        }
    } else {
        alert(`Шкода, що Ви не захотіли ввести назву свого міста. Оновіть сторінку (F5) та спробуйте ще раз.`);
    }
} else {
    alert(`Шкода, що Ви не захотіли ввести свій рік народження. Оновіть сторінку (F5) та спробуйте ще раз.`);
}

