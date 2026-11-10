const guessBtn = document.getElementById('guessBtn');
const colorInput = document.getElementById('colorInput');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'gray'];

guessBtn.addEventListener
(
'click', function() 
{
    const userColor = colorInput.value.trim().toLowerCase();

    if (!userColor) 
    {
        alert('Please enter a colour first!');
        return;
    }

	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = randomColor;
	     if (userColor === randomColor) 
               {
                  alert(`Congrats you won! The background colour was ${randomColor}.`);
               } 
           else 
               {
                  alert(`You loose! The background colour was ${randomColor}.`);
               }
}
);