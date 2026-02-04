import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form className="flex flex-col gap-4">
<Input required legend="E-mail" type="email" placeholder="seu@email"/>

<Input required legend="Senha" type="password" placeholder="123456"/>
    </form>
  )
}