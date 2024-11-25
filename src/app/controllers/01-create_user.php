<?php

use Respect\Validation\Validator as verify;


function validateName($name)    {
    return verify::stringType()
            ->notEmpty()
            ->length(2, 50)
            ->alpha(' ')
            ->validate($name);
}

function validateEmail($email)   {
    return verify::email()
            ->validate($email);
}

//function validatePassword($password)    {
//    return verify::stringType()
            //->lenght(8, null)
            //->regex('/[a-z]')
            //->regex('/[0-9]')
            //->regex('/[W]/')
            //->validate($password);
//}


$name = '';
$email = '';
$password = '';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (validateName($name) && validateEmail($email)) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Credentials are valid!',
            'name' => $name,
            'email' => $email,
            'password' => $password
        ]);
        exit;
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Invalid input. Check your data.'
        ]);
        exit;
    }
}
?>