<template>
  <div>
    <div class="container login-container">
            <div class="row justify-content-center">
    <div class="col-md-6">
      <h3>Operações</h3>
        <div class="classe">
                {{$route.params.account_number}}
            <form @submit.prevent="operation">
            <div v-if="error==true" class="alert alert-danger">{{errormessage}}</div>
            <div v-if="success==true" class="alert alert-success">{{successmessage}}</div>
            <div class="row">
                <div class="col-md-6 form-group">
                    <select type="text" class="form-control " value="" v-model="type">
                        <option value="w">WITHDRAW</option>
                        <option value="d">DEPOSIT</option>
                        <option value="s">BALANCE</option>
                    </select>
                </div>
                <div class="col-md-6 form-group">
                    <input type="number" step="0.01" class="form-control" placeholder="Valor" value="" v-model="value" />
                </div>
            </div>
            <div class="form-group">
                <input type="submit" class="btnSubmit" value="Efetuar" />
            </div>
            </form>
        </div>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contas',
  props: {
    msg: String
  },
  data(){
    return {
      value:0,
      type:'w',
      error:false,
      errormessage:null,
      success:false,
      successmessage:null
    }
  }
  ,
  methods:{
    getConta(){

      this.$router.push(
        {
        name: 'Conta'

        }
    )

    },
    operation(){
        this.error=false;
        this.success = false;
        let request = '';
        let sucessMessageCallBack = (response)=>{
            this.successmessage = response.data.message;
            this.success = true;
        };
        if(this.type == 'w'){
            request = axios.post('http://localhost:8000/api/account/withdraw/' + this.$route.params.account_number,{value:this.value});
        }else if(this.type == 'd'){
            request = axios.post('http://localhost:8000/api/account/deposit/' + this.$route.params.account_number,{value:this.value});
        }else{
            request = axios.get('http://localhost:8000/api/account/balance/' + this.$route.params.account_number);
            sucessMessageCallBack = (response)=>{
                this.successmessage = 'Saldo: ' + response.data.balance;
                this.success = true;
            };
        }
            request.then(sucessMessageCallBack
        ).catch( (error)=>{
            this.error=true;
            this.errormessage = error.response.data.message;

        })

    }
  }
}
</script>

<style>
    .listaContas{
        cursor: pointer;
    }
    .classe{
        border: 1px solid gray;
    }
</style>
