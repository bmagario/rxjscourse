import { map } from 'rxjs/operators';
import { fromEvent } from "rxjs";

const text = document.createElement('div');
text.innerHTML = `
C’est un trou de verdure où chante une rivière
Accrochant follement aux herbes des haillons
D’argent ; où le soleil, de la montagne fière,
Luit : c’est un petit val qui mousse de rayons.
<br/><br/>
Un soldat jeune, bouche ouverte, tête nue,
Et la nuque baignant dans le frais cresson bleu,
Dort ; il est étendu dans l’herbe sous la nue,
Pâle dans son lit vert où la lumière pleut.
<br/><br/>
Les pieds dans les glaïeuls, il dort. Souriant comme
Sourirait un enfant malade, il fait un somme :
Nature, berce-le chaudement : il a froid.
<br/><br/>
Les parfums ne font pas frissonner sa narine ;
Il dort dans le soleil, la main sur sa poitrine
Tranquille. Il a deux trous rouges au côté droit.
It’s a green hollow, where a river is singing
Madly clinging to grass rags
Of silver; where the sun, from the proud mountain,
Is shining: it’s a little valley bubbling with sunlight.
<br/><br/>
A young soldier, his mouth open, his head bare,
And the nape of his neck bathing in cool blue watercress,
Sleeping; he is stretched out on the grass, under the skies,
Pale in his green bed where the light falls like rain.
<br/><br/>
Feet in the gladiolas, he is sleeping. Smiling like
A sick child would smile, he takes a nap:
Nature, rock him warmly: he is cold.
<br/><br/>
Sweet scents don’t tickle his nose anymore;
He sleeps in the sun, hand on the breast,
Peacefully. He has two red holes in his right side.
<br/><br/><br/><br/>

Sous le pont Mirabeau coule la Seine
Et nos amours
Faut-il qu’il m’en souvienne
La joie venait toujours après la peine.
<br/><br/>
Vienne la nuit sonne l’heure
Les jours s’en vont je demeure
<br/><br/>
Les mains dans les mains restons face à face
Tandis que sous
Le pont de nos bras passe
Des éternels regards l’onde si lasse
<br/><br/>
Vienne la nuit sonne l’heure
Les jours s’en vont je demeure
<br/><br/>
L’amour s’en va comme cette eau courante
L’amour s’en va
Comme la vie est lente
Et comme l’Espérance est violente
<br/><br/>
Vienne la nuit sonne l’heure
Les jours s’en vont je demeure
<br/><br/>
Passent les jours et passent les semaines
Ni temps passé
Ni les amours reviennent
Sous le pont Mirabeau coule la Seine
<br/><br/>
Vienne la nuit sonne l’heure
Les jours s’en vont je demeure
Under the Mirabeau Bridge there flows the Seine
Must I recall
Our loves recall how then
After each sorrow joy came back again
<br/><br/>
Let night come on bells end the day
The days go by me still I stay
<br/><br/>
Hands joined and face to face let’s stay just so
While underneath
The bridge of our arms shall go
Weary of endless looks the river’s flow
Let night come on bells end the day
The days go by me still I stay
<br/><br/>

All love goes by as water to the sea
All love goes by
How slow life seems to me
How violent the hope of love can be
Let night come on bells end the day
The days go by me still I stay
<br/><br/>
The days the weeks pass by beyond our ken
Neither time past
Nor love comes back again
Under the Mirabeau Bridge there flows the Seine
<br/><br/>
Let night come on bells end the day
The days go by me still I stay.
<br/><br/><br/><br/>
`;

const calculatePercentageScroll = (e) => {
	const { 
		scrollTop,
		scrollHeight,
		clientHeight
	} = e.target.documentElement;
	return (scrollTop / (scrollHeight - clientHeight)) * 100;
}
const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


const scroll$ = 
fromEvent(document, 'scroll')
.pipe(
	map((e) => calculatePercentageScroll(e)),
)
.subscribe(percent => {
	progressBar.style.width = `${percent}%`;
});

