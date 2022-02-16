import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { userState } from '../../atoms/userState';

interface formInput {
  userName: string;
  password: string;
}

function Login(): JSX.Element {
  const [userFound, setuserFound] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInput>();
  const onSubmit: SubmitHandler<formInput> = (data: any) => {
    const convertedData = data;
    convertedData.userName = convertedData.userName.toLowerCase();
    convertedData.password = convertedData.password.toLowerCase();
    localStorage.setItem('User', JSON.stringify(convertedData));
    setuserFound(true);
  };
  return (
    <>
      <p className="form-header">
        Please login using the default credentials: user/user (Admin is not yet
        added)
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="user-info">Username</p>
          <input
            {...register('userName', {
              required: true,
              validate: (value) => {
                return value.toLowerCase() === 'user' || 'Error message';
              },
            })}
          />
          {errors.userName && (
            <p className="error-msg">
              Incorrect username, please write "user" as username
            </p>
          )}

          <p className="user-info">Password</p>
          <input
            {...register('password', {
              required: true,
              validate: (value) => {
                return value.toLowerCase() === 'user' || 'Error message';
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">
              Incorrect password, please write "user" as password
            </p>
          )}
        </div>
        <input type="submit" hidden />
      </form>
    </>
  );
}

export default Login;
