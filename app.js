console.log('API');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                  APPLICATION PROGRAMMING INTERFACE

// ================================================================================================================

// An application programming interface (API) is a set of rules and tools that allows one software application
//      to communicate with another. They are used to request and display information outside the scope of 
//      their own applications. An example would be jQuery, which has its own set of functions and methods
//      outside of vanilla JavaScript, but JavaScript can communicate with jQuery to execute the functions.

// Other examples include common features of web-based companies like social media. Data such as whether or
//      not a tweet contains the term "ice cream" or which Yelp restaurants are in a certain zipcode don't 
//      format automatically, they have to be sorted via some additional programming. But our websites can
//      communicate with those databases to share the specific, filtered information we're looking for.

// When webpages reference an API, they don't get the information in html format, they come back in either
//      XML, a format similar to html that doesn't describe the presentation and often comes with custom
//      tags, or more commonly JavaScript Object Notation (JSON). JSON looks similar to a JavaScript object,
//      but all keys must be double-quoted.

// ================================================================================================================

//      CURL REQUESTS

// ==============================================================

// One way of making a database request is with the 'curl' request. UPDATE LATER

// ================================================================================================================

//      AJAX

// ==============================================================

// Asynchronous JavaScript And XML, or 'AJAX', is a set of web development techniques used for asynchronous
//      web applications. It works by exchanging small amounts of data with a server behind the scenes of a
//      webpage, allowing the page to be updated without requiring it to completely reload. Important 
//      components are:

// 1. Asynchronous operations:
//      Requests are made asynchronously so that updates happen live on webpage without reloading

// 2. Javascript:
//      JavaScript code is necessary to make requests, manipulate the DOM, and update the webpage dynamically

// 3. XMLHttpRequest (XHR) Object:
//      XHR allows communication between the web browser and the server so updates can be made without 
//      reloading

// 4. Callback functions:
//      Functions are an important way for developers to control how information becomes available and 
//      control how the page updates in response to the new information

// While XML is in the name, modern APIs make use of JSON rather than XML due to the simplicity and how well
//      it works with JavaScript.

// ==============================================================

// A traditional browser request happen in response to entering a url, clicking on a link, and submitting a
//      form. And in each case, the browser makes a request, receives a response, refreshes and a new webpage
//      is loaded. The entire resource is replaced with the result of the request.

// The benefit of AJAX is that new information can be received and displayed without having to reload an
//      entirely new webpage. JavaScript can make the request and receive the response in the background,
//      letting the developer control how this information is shown to the user.

//          https://caniuse.com/

// Click the url above, right-click, inspect, and go to the 'Network' tab. Here you can see any requests 
//      running in the background of the webpage. Type anything you want into the search box at the top, and
//      see all the requests being added. But note that the page did not reload. This website is designed 
//      with AJAX in mind, so sending an information request will get results from the website's JavaScript,
//      which in turn populates the webpage with the requested information.

// ==============================================================

// In general, AJAX is useful for small changes that don't require an entire new webpage, as well as adding a
//      level of interactability to your webpages. Fewer full page loads leads to faster loading times, and
//      less information needs to go across network.

// One thing to make a note of is that sometimes AJAX can make websites less accessible to screen readers, or
//      if someone has a very slow or inconsistent internet connection.

// ================================================================================================================

//      AJAX WITH AXIOS

// ==============================================================

// Actually making requests in the browser with the native code can be clunky and unintuitive, with large
//      amounts of syntax necessary to get anything done. This led to the development of a library named
//      Axios that does these functions with a much simpler syntax.

// ==============================================================

// Before Axios, developers had to use XMLHttpRequest. This required creating a new object and would look
//      something like:

//          const firstReq=new XMLHttpRequest();
//          firstReq.addEventListener('load',function(){
//             console.log(this.responseText);
//          });
//          firstReq.addEventListener('error',()=>{
//             console.log('Error!');
//          });
//          firstReq.open('GET','https://swapi.dev/api/planets/');
//          firstReq.send();

//      And if you un-comment this code and check the console, you'll see a massive JSON text block of 
//      objects giving key/value pair data about the various planets from Star Wars. While there are different
//      steps you can take to make the information look cleaner, you can't get around the general clunkiness
//      of the code. If you want any additional information from the servers, you have to nest this entire
//      process inside itself over and over, and it can quickly get out of hand. All this is just to get 
//      information, without even accounting for robust error handling or DOM changes.

// ==============================================================

// Hopefully why you would want to use a tool like Axios over making requests the traditional way is obvious,
//      but Axios requires a bit of set up. The first step is that you need to make a local server. You can
//      do this in your terminal with the command "python3 -m http.server". Once your server is created, you
//      can use Axios rather than the clunky XMLHttpRequest code. Just like jQuery, you need a script tag in
//      your html file to access the library:

//          <script src="https://unpkg.com/axios/dist/axios.js"></script>

//      Also like jQuery, be sure to add it before your app.js file.

// Type 'axios' into your console, and if it returns anything other than an error, you know you've properly
//      added the axios library.

// ==============================================================

// Axios has a 'get' method that you can use for the axios object. We can test that out using the Star Wars
//      api from earlier:

//          axios.get('https://swapi.dev/api/planets/')

//      But rather than instantly returning data, it returns "Promise {<pending>}". We'll go into the concept
//      of promises more in depth later, but all you need to know for now is that promises are variables that
//      don't quite exist just yet.

// Imagine you've promised to get your friend something for their birthday. You don't have the gift yet, but
//      you have ordered it already, so you can act as though you have it within reason. A promise in 
//      JavaScript represents that gift. You need to wait until the gift actually arrives before you can use
//      it, but you can write code that will use the gift once it actually shows up. It is a placeholder for 
//      a future gift.

// A promise has three states: pending - the promise has been made but not fulfilled, fulfilled - the promise
//      was kept and the value is successfully generated, and rejected - there was a problem along the process
//      and the value was not created.

// When you enter the axios.get() method for the Star Wars api, you can click on the 'pending' section to 
//      reveal three new options, Prototype, PromiseState, and PromiseResult. PromiseState will initially be
//      "pending" and PromiseResult "undefined", because the server request takes time. Save the request as a
//      variable called 'data' and then enter 'data' into the console, and you should get something similar
//      with  "fulfilled" instead of "pending". Click on that and rather than undefined, PromiseResult will
//      be an object. You can navigate that object to find all of the information from the Star Wars api about
//      the various planets.

// ================================================================================================================

//      ASYNCH / AWAIT

// ==============================================================

// While Axios is demonstrably simpler to code so far, we haven't seen it retreive data in any useful way as
//      of yet. We make a request, but JavaScript continues to run independent of the the browser request, so
//      anything we get from any servers doesn't actually show up yet. The way we can get around the different
//      speeds is by making the JavaScript code wait to run until after it's retrieved the data.

// A basic function to retrieve the data would look something like:

function getData(){
    const data=axios.get('https://swapi.dev/api/planets/');
    console.log('This line will appear before the data is loaded');
    return data;
}

//      Which has the aforemented timing issue of calling the data before it's actually retrieved, which we
//      can visualize by watching the console.log line. It will load immediately even as 'data' remains 
//      pending. This is where 'asynch' and 'await' come in. We can define a function as an asynch function
//      and use the await keyword to retrieve the data when it comes in.

async function getDataFixed(){
    const data=await axios.get('https://swapi.dev/api/planets/');
    console.log('This line will appear after the data is loaded');
    return data;
}
//      Now when you run getDataFixed() in the console, the console.log line won't load right away, and by the
//      time it does, 'data' is fulfilled rather than pending.

// One of the less obvious benefits of Axios is that it automatically converts the data from JSON into a 
//      JavaScript object, allowing us to work with it easier and immediately (such as if you wanted to return
//      data.data.results to return just the 'results' array from the 'data' object rather than the entire
//      object).

async function getPlanets(){
    console.log('The planets of Star Wars are...');
    const response=await axios.get('https://swapi.dev/api/planets');
    for(let planet of response.data.results){
        console.log(`${planet.name}`);
    }
}

//      This more specific function will return the name of each planet in the console rather than a massive
//      object of miscellaneous data. You can use this data to fill out sections of your webpage with large
//      blocks of data without having to manually enter everything.

async function planetText(){
    const response=await axios.get('https://swapi.dev/api/planets/');
    const planetNames=response.data.results.map(planet=>planet.name);
    const planets=planetNames.join(', ');
    $('#planets').text(planets);
}
planetText();

// ================================================================================================================

//      MULTIPLE REQUESTS

// ==============================================================

// Say you want to get more than one page's worth of data from a server. You can add multiple asynch/await
//      functions together.

async function getNames(){
    console.log(`The people's names are...`)
    const response=await axios.get('https://swapi.dev/api/people');
    for(let name of response.data.results){
        console.log(`${name.name}`);
    }
    const response2=await axios.get('https://swapi.dev/api/people/?page=2');
    for(let name of response2.data.results){
        console.log(`${name.name}`);
    }
}

// Running getName() in the console will return two pages worth of names, but there's a notable delay
//      between the first and second page. If you want to load everything all at once, such as every planet
//      in universe, run aLotOfPlanetText() and look at the webpage.   

async function aLotOfPlanetText(){
    let planets=[];
    for(let page=1;page<=6;page++) {
        const response=await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
        const planetNames=response.data.results.map(planet=>planet.name);
        planets=planets.concat(planetNames);
    }
    const planetsText=planets.join(', ');
    $('#planets').text(planetsText);
}

//      Everything loaded at once, because there's only one large 'await' variable instead of two smaller
//      ones. Notably, this takes much longer to load, so developers will need to choose between longer wait
//      times for more data or shorter times for less data. A very common way is to have your data separted
//      into pages, like the mock search function you can see on this webpage, where each page of data is
//      represented by a new 'page' on the webpage.

async function fetchData(page){
    const url=`https://swapi.dev/api/people/?page=${page}`;
    try{
        const response=await axios.get(url);
        const names=response.data.results.map(person=>person.name);
        const $ul=$('ul');
        $ul.empty();
        
        names.forEach(name=>{
            const $li=$('<li>').text(name);
            $ul.append($li);
        });

        $('h3').text(`Page ${page}`);
    }catch(error){
        console.error('Error fetching data',error);
    }
}

$('button').not(':last').each(function(index){
    $(this).on('click',async function() {
        fetchData(index + 1);
    });
});

// As an aside, one of the benefits of learning to make your functions dynamic is that this new single
//      function replaced the over 100 lines of code I had initially written to handle each button event
//      individually:

// $('button').eq(0).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 1');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(1).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=2');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 2');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(2).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=3');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 3');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(3).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=4');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 4');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(4).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=5');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 5');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(5).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=6');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//             $('h3').text('Page 6');
//         });
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(6).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=7');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 7');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(7).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=8');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 8');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });
// $('button').eq(8).on('click',async function(){
//     try{
//         const response=await axios.get('https://swapi.dev/api/people/?page=9');
//         const names=response.data.results.map(person=>person.name);
//         const $ul=$('ul');
//         $ul.empty();
//         names.forEach(name=>{
//             const $li=$('<li>').text(name);
//             $ul.append($li);
//         });
//         $('h3').text('Page 9');
//     }catch(error){
//         console.error('Error fetching data',error);
//     }
// });

// ================================================================================================================

//      TRY AND CATCH

// ==============================================================

// Unlike XMLHttpRequest, there is so specific 'error' event for AJAX, but it has the means to handle bad
//      requests another way. 

async function getGoodBoy(){
    const results=await axios.get('https://dog.ceo/api/breeds/image/random');
    const goodBoy=results.data.message;
    $('img').attr('src',goodBoy);
}

// Using this function, we can click on the 'Random Dog' button to generate a random picture of a dog from
//      this server. But the server also sorts the dogs by breed, so we can add a form to specify what dog 
//      breed we want to show
async function getGoodBoyByBreed(breed){
    try{
    const formattedBreed=breed.replace(/\s+/g,'').toLowerCase();
    const url=`https://dog.ceo/api/breed/${formattedBreed}/images/random`;
    const results=await axios.get(url);
    const goodBoy=results.data.message;
    $('img').attr('src',goodBoy);
    }catch{
        $('img').attr('src','https://i.imgflip.com/8b8xrl.jpg');
        $('input').attr('placeholder','Please enter a valid dog breed');
    }
}
$('#dog-form').on('submit',function(event){
    event.preventDefault();
    const breed=$('input').val().trim();
    if(breed===''||breed.length===0){
        getGoodBoy();
    }else{
        getGoodBoyByBreed(breed);
    }
    $('input').val('').attr('placeholder','');
});
