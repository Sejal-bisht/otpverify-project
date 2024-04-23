function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverifiy')[0];

    let otp_val= Math.floor(Math.random() * 10000);

    let emailbody= `<h2>Your OTP is <h2>${otp_val}`;
    Email.send({
        SecureToken : "edc2fd1d-bf68-4593-a45a-f576455fa348",
        To : email.value,
        From : "mihir62@gmail.com",
        Subject : "Email OTP using Javascript",
        Body : emailbody,
    }).then(

      message => {
        if(message==="OK") {
            alert("OTP sent to your email"+ email.value);

            otpverify.style.display = "flex";
            const otp_inp= document.getElementById('otp_inp');
            const otp_btn= document.getElementById('otp-btn');
        
            otp_btn.addEventListener('click', () => {
            if( otp_inp.value== otp_val){
                alert("Email address verified....");
            }
            else{
                alert("Invalid OTP");
            }
        }
            )
        }
    });
}
