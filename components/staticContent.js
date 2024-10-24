
export const _landingPage = `
<script type="text/javascript">
   (window.onload = function () {
     Calendly.initBadgeWidget({
       url: "https://calendly.com/syedmutti/call-with-muti",
       text: "Schedule Time",
       color: "#22418a",
       textColor: "#ffffff",
       branding: undefined,
     });
   })
   
</script>


   <script>
      document.getElementById("email-form").addEventListener("submit", async function (e) {
        e.preventDefault(); 
      
        const email = e.target.querySelector("input[type='email']").value;
      
        try {
          const response = await fetch("https://be.xis.ai/api/emails", { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                email: email,
              },
            }),
          });
      
          if (response.ok) {
            alert("Email submitted successfully!");
          } else {
            alert("Failed to submit email.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while submitting the email.");
        }
      });
   </script>
    `;
