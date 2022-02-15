import { useForm, SubmitHandler } from 'react-hook-form';

interface formInput {
  userName: string;
  password: string;
}
function Login() {
  const { register, handleSubmit } = useForm<formInput>();
  const onSubmit: SubmitHandler<formInput> = (data: any) => {
    console.log(data);
  };
  return (
    <>
      Please login using the default credentials: user/user
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('userName', {
            required: true,
          })}
        />
        <input {...register('password', { required: true })} />
        <input type="submit" hidden />
      </form>
    </>
  );
}

export default Login;
