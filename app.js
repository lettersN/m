
const viewRelated = document.getElementById('view-related-cards');
const barRecent = document.getElementById('view-bar-recents-cards');

const barRecentCards = [
    {name: 'Miller Thriller ', des: '(15) new posts'},
    {name: 'Mirage Mario ', des: '(22) new posts'},
    {name: 'the Penguin\'s', des: '(7) new posts'},
    {name: 'Bowsette', des: '(42) new posts'}
];

const viewRelatedCards = [
    {name: 'mario kingdom', img: 'imgs/af790d84c1ce42225785eeacd7143819.jpg', likes: '4.55k', views: '9.23k'},
    {name: 'Super Mario Bros Movie', img: 'imgs/mario1.jpg', likes: '2.67k', views: '6.18k'},
    {name: 'luigi Art\'s', img: 'imgs/mario2.jpg', likes: '1.05k', views: '4.33k'},
    {name: 'Mario ARTworld ', img: 'imgs/mario.jpg', likes: '5.02k', views: '10.99k'}
];

document.addEventListener('keydown', e => {
    if(e.key == 'z'){
        location.reload();
    }
})


const barCard = () => {
    for (let i = 0; i < viewRelatedCards.length; i++) {
        barRecent.innerHTML += `
        <div class="view-bar-recents-card">
            <img src="${viewRelatedCards[i].img}" alt="" class="view-bar-recents-card-img">
             <div class="view-bard-recents-card-body">               
                <p class="view-bar-recents-card-body-name">${barRecentCards[i].name}</p>
                <p class="view-bar-recents-card-body-des">${barRecentCards[i].des}</p>                                  
              </div>              
            </div>                                
        `  
    }
}


const viewRelatedShow = () => {
    for (let i = 0; i < viewRelatedCards.length; i++) {
        viewRelated.innerHTML += `
        <div class="view-populars-card pointer">
            <img src="${viewRelatedCards[i].img}" alt="" class="view-populars-card-img">
                <div class="view-populars-card-body">
                <div class="view-populars-card-body-header">
                    <p class="view-populars-card-body-name">${viewRelatedCards[i].name}</p>
                    <i class="fa-solid fa-bookmark view-populars-card-body-name-icon"></i>
                </div>
                    <div class="view-populars-card-body-num">
                        <p class="view-populars-card-body-numbers"><i class="fa-regular fa-thumbs-up 
                        view-populars-card-body-numbers-icon"></i>${viewRelatedCards[i].likes}</p>
                        <p class="view-populars-card-body-numbers"><i class="fa-solid fa-eye 
                        view-populars-card-body-numbers-icon"></i>${viewRelatedCards[i].views}</p>
                    </div>
                </div>
        </div>
        `   
    }
}
viewRelatedShow();
barCard();
