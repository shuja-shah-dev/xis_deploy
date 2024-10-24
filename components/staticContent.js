
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
   <div class="blob top-[-100px] left-0"></div>
   <div class="blob top-[900px] right-0"></div>
   <div class="blob2 top-[1500px] left-0"></div>
   <div class="blob top-[2500px] right-0"></div>
   <div class="blob2 top-[3100px] left-0"></div>
   <div class="blob right-0 bottom-0"></div>

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
