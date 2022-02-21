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
           
        </div>
    </div>
    <div v-if="messages" class="messages">
            <h4>{{messages}}</h4>
        </div>
</main>
</template>

<script>

import getWeb3 from './web3.js';
import Web3 from 'web3';
import {ethers} from "ethers";
import { commify } from '@ethersproject/units';
import * as Functions from "../components/functions.js";

export default {
    components: {},
    data() {
        return {
            logoMain:logoMain,
            account: "Not Connected",
            web3:null,
            messages:false,
            connected:false,
            starAdded:false,
            web3: null,
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
                await this.matics();
                initMasterchef();
            }
            else{
                console.log("account already set");
                this.connected= true;
                this.account = this.$route.params.account;
                this.web3 = this.$route.params.web3;
                var chainId = new this.web3.eth.getChainId();
                if(chainId != 0xFA){Functions.setChain()};
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
                            this.messages = " Account: " + this.account;
                            setTimeout(d=>{this.messages = false},1000);
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

