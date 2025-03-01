function validaFaleConosco(){
	var nome = document.frmFaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÁ-ü]{3,}([ ]{1}[A-zÁ-ü]{2,})+$");
	
	if (!expRegNome.test(nome)){
		alert("Preencha o campo Nome corretamente. ");
		document.frmFaleconosco.txtnome.focus();
		return false;
	}

    if (document.frmFaleconosco.txtmail.value==""){
		alert("Preencha o campo Email. ");
		document.frmFaleconosco.txtmail.focus();
		return false;
	}

	if (document.frmFaleconosco.txtcomentario.value==""){
		alert("Preencha o campo Comentario. ");
		document.frmFaleconosco.txtcomentario.focus();
		return false;
	}

    if(document.frmFaleconosco.txtassunto.value==""){
        alert("Preencha o campo Motivo. ");
        document.frmFaleconosco.txtassunto.focus();
        return false;
    }
	
	return true;
}

function validaLogin() {
    if (document.frmLogin.txtlogin.value=="") {
        alert("Preencha o campo Email.");
        document.frmLogin.txtlogin.focus();
        return false;
    }

    var senha = document.frmLogin.txtsenha.value;
        if (senha == "") {
            alert("Preencha o campo Senha.");
            document.frmLogin.txtsenha.focus();
            return false;
        }

    return true;
}