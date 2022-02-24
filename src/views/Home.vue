<template>
<main id="main">
    <div class="content">
            <h3 class="account">
                Connected Account <span id="account" class="purple">{{account}}</span>
                <button v-if="!starAdded" @click="Functions.CustomToken()" class="addStar">Add HNR to <img width="30px" src="https://jaguarswap.com/images/tokens/metamask.png"></button>
                <div v-if="!connected" class="connect">
                    <button  @click="matics()" class="connectWallet"><i class="fas fa-network-wired"></i>Connect</button>
                </div>
                <div v-if="connected" class="disconnect">
                    <button @click="disconnect()" class="connectWallet"><i class="fas fa-network-wired"></i>Disconnect</button>
                </div>
            </h3>
        <h4 class="heading center">Quick and dirty HNR interaction site</h4>
        <p class="sm-heading center">Official site
            <a href="https://samurai.financial" target="_new">Samuari Financial</a>
        </p>
        <div class="cards">
            <div class="container">
                <div class="card" style="min-width:50%">
                    <div class="grid">
                        <div class="label">
                            <h2>Current HNR Balance: {{Balance}}</h2>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="label">
                            <h2>Last Claim: {{claimDate}}</h2>
                        </div>
                    </div>
                    <div class="grid">
                        <button @click="cashOut()">Claim reward</button>
                    </div>
                </div>
            </div>           
        </div>
        <div class="cards">
            <div class="container">
                <div class="card" style="min-width:50%">
                    <div class="grid">
                        <div class="label">
                            <h2>Create Musha Node</h2>
                        </div>
                    </div>
                    <div class="grid">
                        <div class="label">
                            <h2>Node Name: </h2>
                        </div>
                        <div class="cont  large-text">
                            <input v-model="nodeName" placeholder="New Node Name" />
                        </div>
                    </div>
                    <div class="grid">
                        <button @click="createNode()">Create Musha Node</button>
                    </div>
                </div>
            </div>
           
            <div class="container">
                <div class="card" style="min-width:50%">
                    <div class="label">
                        <h2>Donations 0xcE3Ad9d144eCd83C3651D7Ee20890cE4ED70e6dD</h2>
                    </div>
                </div>
                </div>
        </div>
    </div>
    <div v-if="messages" class="messages">
            <h4>{{messages}}</h4>
        </div>
</main>
</template>

<script>

import getWeb3 from './web3.js';
import * as Functions from "../components/functions.js";

export default {
    components: {},
    data() {
        return {
            account: "Not Connected",
            web3:null,
            messages:false,
            connected:false,
            starAdded:false,
            web3: null,
            Balance:null,
            claimDate:null,
            nodeName:null
        }
    },
    watch: {
        '$route': {
            handler(newValue, oldValue) {

            }
        }
    },
    async created() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            if(this.$route.params.web3 == null || this.$route.params.account == null){
                console.log("account not set");
                await this.matics();;
            }
            else{
                console.log("account already set");
                this.connected= true;
                this.account = this.$route.params.account;
                this.web3 = this.$route.params.web3;
                var chainId = new this.web3.eth.getChainId();
                if(chainId != 0xFA){Functions.setChain()};
                this.getBalance();
            }
        }
        else{
            this.matics();
            if(confirm("Would you like to get MetaMask?")){
                Functions.getMetamask();
            }
        }
    },
    methods: {
        async matics(){
            getWeb3().then((result) => {
                //console.log(result);
                if(result == 'Non-Ethereum browser detected. You should consider trying MetaMask!'){
                    this.messages = result;
                    setTimeout(d=>{
                        this.messages = false;
                    },5000)
                }
                else{
                    const web3 = result;// we instantiate our contract next
                    this.web3 = web3;
                    var chainId = new web3.eth.getChainId();
                    if(chainId != 0xFA){Functions.setChain()};
                    web3.eth.getAccounts().then((accounts) => {
                        if(accounts.length > 0){
                            this.connected = true;
                            this.account = accounts[0];
                            console.log(this.account)
                            this.messages = " Account: " + this.account;
                            setTimeout(d=>{this.messages = false},1000);
                            this.getBalance();
                        }
                        else{
                            this.messages = "No account Connected"
                            setTimeout(d=>{
                                this.messages = false
                            },5000)
                        }
                    })
                }
            })
        },
        async getBalance(){
            this.Balance = await Functions.getBalance(this.web3,this.account);
        },
        async cashOut(){
            await Functions.cashoutAll(this.web3,this.account);
        },
        async createNode(){
            await Functions.createNode(this.web3,this.nodeName,this.account)
        },
        async disconnect(){
            this.account = "Not Connected";
            this.$route.params.account = null;
            this.$route.params.web3 = null;
            this.web3 = null;
            this.connected = false;
        },
    }
}

</script>

