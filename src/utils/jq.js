export function jqry(){
  console.log("jq");

  $(document).ready(function() {

      $('.drawer').drawer();
      $('.drawer').drawer('close');

      $('.drawer').on('drawer.opened', function(){

        console.log("drawer.opened");
      });

      $('.drawer').on('drawer.closed', function(){
        console.log("drawer.closed");
      });
  });
}
