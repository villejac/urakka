<template>
    <main>
        <div> 
            <div class="btn-container">
            <button class="button" v-on:click="isHidden = !isHidden, isHidden2 = false, isHidden3 = false">Ilmajoki</button>
            <button class="button" v-on:click="isHidden2 = !isHidden2, isHidden = false, isHidden3 = false">Seinäjoki</button>
            <button class="button" v-on:click="isHidden3 = !isHidden3, isHidden = false, isHidden2 = false">Parkano</button>
            </div>
            <div v-if="isHidden">
            <h1>Ilmajoki</h1>  
            <div v-for="data in dataList" :key="data.id" class="data-container">
            <div class="data-stats">
                <div>
                <span class="title">Id: </span>
                <span>{{data.Kohdenumero}}</span>
                </div>
                <div>
                <span class="title">Tyyppi: </span>
                <span>{{data.Tyyppi}}</span>
                </div>
                <div>
                <span class="title">Rakennusvuosi: </span>
                <span>{{data.Rakennusvuosi}}</span>
                </div>
                <div>
                <span class="title">Taloyhtiö: </span>
                <span>{{data.Taloyhtiö}}</span>
                </div>
                <div>
                <span class="title">Isännöitsijä: </span>
                <span>****</span>
                </div>
                <div>
                <span class="title">Tulevat remontit: </span>
                <span>{{data.TulevatRemontit}}</span>
                </div>
            </div>
            </div>



            </div>
            <div v-if="isHidden2">
            <h1>Seinäjoki</h1>
            <div v-for="data in dataList2" :key="data.id" class="data-container">
            <div class="data-stats">
                <div>
                <span class="title">Id: </span>
                <span>{{data.Kohdenumero}}</span>
                </div>
                <div>
                <span class="title">Tyyppi: </span>
                <span>{{data.Tyyppi}}</span>
                </div>
                <div>
                <span class="title">Rakennusvuosi: </span>
                <span>{{data.Rakennusvuosi}}</span>
                </div>
                <div>
                <span class="title">Taloyhtiö: </span>
                <span>{{data.Taloyhtiö}}</span>
                </div>
                <div>
                <span class="title">Isännöitsijä: </span>
                <span>****</span>
                </div>
                <div>
                <span class="title">Tulevat remontit: </span>
                <span>{{data.TulevatRemontit}}</span>
                </div>
            </div>
            </div>
            </div>

            <div v-if="isHidden3">
                <h1>Parkano</h1>
                <div v-for="data in dataList3" :key="data.id" class="data-container">
            <div class="data-stats">
                 <div>
                <span class="title">Id: </span>
                <span>{{data.Kohdenumero}}</span>
                </div>
                <div>
                <span class="title">Tyyppi: </span>
                <span>{{data.Tyyppi}}</span>
                </div>
                <div>
                <span class="title">Rakennusvuosi: </span>
                <span>{{data.Rakennusvuosi}}</span>
                </div>
                <div>
                <span class="title">Taloyhtiö: </span>
                <span>{{data.Taloyhtiö}}</span>
                </div>
                <div>
                <span class="title">Isännöitsijä: </span>
                <span>****</span>
                </div>
                <div>
                <span class="title">Tulevat remontit: </span>
                <span>{{data.TulevatRemontit}}</span>
                </div>
            </div>
            </div>
            </div>
        </div>
    </main>
</template>

<script>
 // apin nouto
let url = 'http://localhost:8080/api/ilmajoki';
let url2 = 'http://localhost:8080/api/seinajoki';
let url3 = 'http://localhost:8080/api/parkano';
export default {
    name: 'Main-block',
    data() {
        return {
            dataList: [],
            dataList2: [],
            dataList3: [],
            isHidden: false,
            isHidden2: false,
            isHidden3: false,
        }
    },
    mounted() {
        fetch(url)
        .then(response => response.json())
        .then(data => (this.dataList = data));


        fetch(url2)
        .then(response => response.json())
        .then(data => (this.dataList2 = data));


        fetch(url3)
        .then(response => response.json())
        .then(data => (this.dataList3 = data));
    }
}
    
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
main {
    padding-bottom: 180px;
    max-width: 900px;
    margin: auto;
}
h1 {
    padding: 20px;
    font-family: 'Roboto', sans-serif;
}
.data-stats {
  border-bottom: 2px solid #ccc;
  padding: 20px;
}
.btn-container {
    display: flex;
    justify-content: center;
}
.button {
  background: #5E5DF0;
  border-radius: 999px;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  margin: 5px;
}
.title {
    font-weight: bold;
}
</style>