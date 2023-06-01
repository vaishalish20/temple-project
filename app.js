const mymap = L.map('map').setView([ 22.9734, 78.6569], 5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileLayer = L.tileLayer(tileUrl,{attribution});
tileLayer.addTo(mymap);


function generateList(){
    const ul = document.querySelector('.list');
    tempList.forEach((temp) =>{

        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const p = document.createElement('p');

        a.addEventListener('click',() =>{
            flyTostore(temp);
        });
        div.classList.add('temp-item');
        a.innerText = temp.properties.name;
        a.href='#';
        p.innerText = temp.properties.description;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);


    });
}
generateList();

function makePopupcontent(temp){

    return `
    <div>
    <h4>${temp.properties.name}</h4>
    <p>${temp.properties.description}</p>
    `;
    // <div class="phone-number">
    // <a href="tel:${temp.properties.phone}">${temp.properties.phone}</a></div>
    // </div>
}
function onEachFeature(feature,layer){
    layer.bindPopup(makePopupcontent(feature),{closeButton:false,offset :L.point(0,-8)});

}
var myIcon =L.icon({
    iconUrl : 'mark.png',
    iconSize : [30,40]

});
const tempsLayer =L.geoJSON(tempList,{
    onEachFeature : onEachFeature,
    pointToLayer:function(feature,latlng){
        return L.marker(latlng,{icon :myIcon})
    }
});
tempsLayer.addTo(mymap);


function flyTostore(store){
    const lat = store.geometry.coordinates[1];
    const lng = store.geometry.coordinates[0];
mymap.flyTo([lat,lng],14,{
    duration :4
});
setTimeout(() =>{
  
    L.popup({closeButton:false,offset:L.point(0,-8)})
.setLatLng([lat,lng])
.setContent(makePopupcontent(store))
.openOn(mymap);

},3000);

}