import $ from 'jquery';
import password from "./password";


const secutirylockmeta = $('meta[data-lock-enabled]');

const pageLockerProtection = ( phrase ) => {

    const bodyContent = $('body').find('.code-to-hide');

    $('body').empty();


    const checker = prompt('Enter password please');

    if( checker == phrase ){

        $('body').html( bodyContent );

    } else {
        console.log( 'error' )
    }

}



if( secutirylockmeta ) {

    pageLockerProtection( password );
}
