<template>
  <div>
    <div class="container login-container">
            <div class="row justify-content-center">
    <div class="col-md-6">
      <h3>Contas</h3>
        <b-list-group>
            <b-list-group-item @click="getConta(account.account_number)" v-for="account in accounts" :key="account.id" class="listaContas">
                <small> Numero da Conta:</small><br> {{account.account_number}} <br>
                Saldo: <b-badge variant="primary" pill>R$ {{account.balance}}</b-badge>
            </b-list-group-item>
        </b-list-group>
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
      accounts:[]
    }
  }
  ,
  mounted(){
    axios.get('http://localhost:8000/api/account/list').then((response)=>{
        this.accounts = response.data.accounts;
    })
  },
  methods:{
    getConta(account_number){

      this.$router.push(
        {
            name: 'Conta',
            params:{
                account_number
            }
        }
    )

    }
  }
}
</script>

<style>
    .listaContas{
        cursor: pointer;
    }
</style>
