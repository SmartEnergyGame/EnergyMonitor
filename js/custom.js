'use strict'
/**
 * @file custom.js
 * @author Daniel Santos <dfsantosbu@unal.edu.co>
 * @version 1
 */

 function displayOptions(){
  if(document.getElementById("sub-progress").style.display == "inline"){
    document.getElementById("sub-progress").style.display = "none";
  }else{
    document.getElementById("sub-progress").style.display = "inline";
  }
 }

 function displayRightMenu(){
  document.getElementById("sidenav-right").style.width = "260px";
  document.getElementById("bell1").style.display = "none";
 }

 function hideRightMenu(){
  document.getElementById("sidenav-right").style.width = "0px";
  document.getElementById("bell1").style.display = "inline";
 }

 function displayOptionsWallet(){
  if(document.getElementById("sub-wallet").style.display == "block"){
    document.getElementById("sub-wallet").style.display = "none";
  }else{
    document.getElementById("sub-wallet").style.display = "block";
    document.getElementById("trade").style.display = "none";
    document.getElementById("options-wallet").style.display = "none";
  }

 }