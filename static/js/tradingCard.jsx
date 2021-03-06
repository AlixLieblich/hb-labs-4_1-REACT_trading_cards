"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },

  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'underwater basket weaving',
    imgUrl: '/static/img/merge.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill} </h2>
    </div>
  );
}

// function TradingCardContainer(arg) {
// define TradingCardContainer component

  // loop over each data point
  // and make a TradingCard component
  // return all those TradingCard's we made


// mount just ONE thing onto the page:
// one TradingCardContainer component

function TradingCardContainer() {
  const tradingCards = [];

  for (const currentCard of tradingCardData) {
    tradingCards.push(

      <TradingCard 
            name= {currentCard.name}
            skill={currentCard.skill}
            imgUrl={currentCard.imgUrl}
        /> 
    );
  }
  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}


ReactDOM.render(
  <TradingCardContainer />,
  document.querySelector('#LISTMYCARDS')
);



// ReactDOM.render(
//   (
//     <TradingCard
//       name="Balloonicorn"
//       skill="video games"
//       imgUrl="/static/img/balloonicorn.jpg"
//     />
//   ),
//   document.querySelector('#balloonicorn') 
// ); 
// // In cards.html ID = balloonicorn, this react.dom will render into the line using func: TradingCard

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Float"
//       skill="baking pretzels"
//       imgUrl="/static/img/float.jpg"
//     />
//   ),
//   document.querySelector('#float')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Llambda"
//       skill="knitting scarves"
//       imgUrl="/static/img/llambda.jpg"
//     />
//   ),
//   document.querySelector('#llambda')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Merkitty"
//       skill="underwater basket weaving"
//       imgUrl="/static/img/merge.jpg"
//     />
//   ),
//   document.querySelector('#merkitty')
// );

// ReactDOM.render(
//   (
//     <TradingCard
//       name="Nala"
//       skill="Rawring"
//       imgUrl="/static/img/polymorphism.jpg"
//     />
//   ),
//   document.querySelector('#polymorphism')
// );
