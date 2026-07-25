console.log("SIMULATOR CARREGADO")
const nav = document.querySelector("nav ul");
const menu = document.querySelector(".menu-mobile");

if(menu){

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

// ============================
// SIMULADOR
// ============================

// ========================================
// SIMULADOR
// ========================================

const simulator = {

    currentStep: 0,

    goal: "",

    value: "",

    term: "",

    name: "",

    phone: "",

    email: "",

    message: ""

};

const steps = document.querySelectorAll(".step-content");
const progressSteps = document.querySelectorAll(".step");
const progressFill = document.querySelector(".progress-fill");

// Mostrar etapa

function showStep(index){

    steps.forEach((step,i)=>{

        step.classList.toggle("active",i===index);

    });

    progressSteps.forEach((step,i)=>{

        step.classList.toggle("active",i<=index);

    });

    if(progressFill){

        progressFill.style.width=`${((index+1)/steps.length)*100}%`;

    }

    simulator.currentStep=index;

}

if(steps.length){

    showStep(0);

}

// =========================
// OBJETIVO
// =========================

document.querySelectorAll(".goal-card").forEach(card=>{

    card.addEventListener("click",()=>{

        document.querySelectorAll(".goal-card").forEach(c=>{

            c.classList.remove("selected");

        });

        card.classList.add("selected");

        simulator.goal=card.dataset.goal;

    });

});

// =========================
// VALORES / PRAZO
// =========================

document.querySelectorAll(".value-card").forEach(card=>{

    card.addEventListener("click",()=>{

        const parent=card.parentElement;

        parent.querySelectorAll(".value-card").forEach(c=>{

            c.classList.remove("selected");

        });

        card.classList.add("selected");

        if(card.dataset.value){

            simulator.value=card.dataset.value;

        }

        if(card.dataset.term){

            simulator.term=card.dataset.term;

        }

    });

});

// =========================
// PRÓXIMO
// =========================

document.querySelectorAll(".next-step").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(simulator.currentStep===0 && simulator.goal===""){

            alert("Selecione um objetivo.");

            return;

        }

        if(simulator.currentStep===1 && simulator.value===""){

            alert("Escolha um valor.");

            return;

        }

        if(simulator.currentStep===2 && simulator.term===""){

            alert("Escolha um prazo.");

            return;

        }

        showStep(simulator.currentStep+1);

    });

});

// =========================
// VOLTAR
// =========================

document.querySelectorAll(".prev-step").forEach(btn=>{

    btn.addEventListener("click",()=>{

        showStep(simulator.currentStep-1);

    });

});

// =========================
// MÁSCARA TELEFONE
// =========================

const phone=document.getElementById("phone");

if(phone){

    phone.addEventListener("input",()=>{

        let value=phone.value.replace(/\D/g,"");

        value=value.replace(/^(\d{2})(\d)/,"($1) $2");

        value=value.replace(/(\d{5})(\d)/,"$1-$2");

        phone.value=value;

    });

}

// =========================
// ENVIAR
// =========================

const finish=document.querySelector(".finish-step");

const number="5555999942064"; // ALTERE PARA O SEU

if(finish){

finish.addEventListener("click",()=>{

    simulator.name=document.getElementById("name").value.trim();

    simulator.phone=document.getElementById("phone").value.trim();

    simulator.email=document.getElementById("email").value.trim();

    simulator.message=document.getElementById("message").value.trim();

    if(simulator.name===""){

        alert("Informe seu nome.");

        return;

    }

    if(simulator.phone===""){

        alert("Informe seu telefone.");

        return;

    }

    const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email.test(simulator.email)){

        alert("Informe um e-mail válido.");

        return;

    }

    const text=`*SIMULAÇÃO DE CONSÓRCIO*

Objetivo: ${simulator.goal}

Valor: ${simulator.value}

Prazo: ${simulator.term} meses

Nome: ${simulator.name}

Telefone: ${simulator.phone}

Email: ${simulator.email}

Observações:

${simulator.message}`;

    finish.disabled=true;

    finish.innerHTML="Enviando...";

    setTimeout(()=>{

        window.open(

        `https://wa.me/${number}?text=${encodeURIComponent(text)}`,

        "_blank"

        );

        finish.disabled=false;

        finish.innerHTML="Receber Simulação";

    },600);

});

}

const phoneInput = document.getElementById("phone");

if (phoneInput) {

    phoneInput.addEventListener("input", () => {

        let value = phoneInput.value.replace(/\D/g, "");

        value = value.replace(/^(\d{2})(\d)/, "($1) $2");

        value = value.replace(/(\d{5})(\d)/, "$1-$2");

        phoneInput.value = value;

    });

}

// ============================
// CARROSSEL
// ============================

const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

if(track && next && prev){

    function updateSlider(){

        track.style.transform = `translateX(-${current*100}%)`;

    }

    next.addEventListener("click",()=>{

        current++;

        if(current>=slides.length){

            current=0;

        }

        updateSlider();

    });

    prev.addEventListener("click",()=>{

        current--;

        if(current<0){

            current=slides.length-1;

        }

        updateSlider();

    });

    setInterval(()=>{

        current++;

        if(current>=slides.length){

            current=0;

        }

        updateSlider();

    },5000);

}

// ============================
// FAQ
// ============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// ============================
// BACK TO TOP
// ============================

const backTop = document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        backTop.style.display="flex";

    }else{

        backTop.style.display="none";

    }

});

backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

header.classList.toggle(

"scrolled",

window.scrollY>80

);

});

const reveals=document.querySelectorAll(

".hero,.solutions,.simulator,.advantages,.achievements,.faq,.final-cta,.footer"

);

reveals.forEach(item=>{

item.classList.add("reveal");

});

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.classList.add("active");

}

});

});
