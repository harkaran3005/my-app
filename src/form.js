import './App'

export function Form(){
    return(

    <form class="details">
                    
    <label for="name">Full Name</label>
    <input type="text" id="name" placeholder="Name..."/>
    
    <label for="mail">Email</label>
    <input type="email" id="mail" placeholder="Email..."/>
    
    <label for="username">Username</label>
    <input type="text" id="username" placeholder="Username..."/>
    
    <label for="password">Password</label>
    <input type="password" name="pass" id="password" placeholder="Password..."/>
    
    <label for="confirmPass">Repeat Password</label>
    <input type="password" name="pass" id="confirmPass" placeholder="Repeat Password..."/>
</form>
    )
    
}