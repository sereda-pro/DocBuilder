import { FormContactUsProps } from './FormContactUs.props';
import styles from './FormContactUs.module.scss';
import cn from 'classnames';
import { Input, Textarea } from '../UI';
import { Htag } from '../UI';
import { Button } from '../UI';
import { useForm } from 'react-hook-form';
import { IFormContactUS, ISendFormContactUs } from './FormContactUs.interface';
import classNames from 'classnames';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';



export function FormContactUs( {className, children, ...props}: FormContactUsProps): JSX.Element {
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IFormContactUS>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setIsError] = useState<string>();

	const date = () => {
		const date = new Date();
		const yyyy = date.getFullYear();
		const mm = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1); 
		const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
		const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
		
		const d = `${yyyy}-${mm}-${dd}T${hh}:${min}`;
		return d;
	};

	const onSubmit = async (formData: IFormContactUS) => {
		//console.log(formData);
		try {
			const { data } = await axios.post(API.topPage.contactUs + 'contactus.json/', {...formData});
			if (data) {
				setIsSuccess(true);
				reset();
			} else {
				setIsError('Что-то пошло не так...');
			}
		} catch (e) {
			console.log(e);
		}
	};
	
	return (
		<form 
			onSubmit={handleSubmit(onSubmit)}
			className={cn(className, styles.formContactUs)}
			{...props}	
		>
			<Htag tag='h3' className={styles.nameForm}>Отправить заявку</Htag>

			<div className={styles.fio}>
				<label>ФИО
					<Input 
						{...register('name', {
							required: {
								value: true,
								message: 'Укажите ФИО или только имя'
							}
						})} 
						placeholder='ФИО полностью'
						error={errors.name}
					/>
				</label>
			</div>

			<div className={styles.NameUL}>
				<label> Наименование организации
					<Input {...register('company')} placeholder='Зарегистрированное' />
				</label>
			</div>

			<div className={styles.tel}>
				<label>Телефон
					<Input {...register('tel', {
						required: {
								value: true,
								message: 'Укажите номер телефона'
							}
					})} 
					placeholder='+7 (999) 999-99-99'
					error={errors.tel}
				/>
				</label>
			</div>

			<div className={styles.mail}>
				<label>E-mail
					<Input 
						{...register('email', {
							required: {
								value: true,
								message: 'Укажите e-mail'
							}
						})} 
						placeholder='info@mail.ru'
						error={errors.email}
					/>
				</label>
			</div>

			<div className={styles.question}>
				<label>Обращение
					<Textarea {...register('message', {
							required: {
								value: true,
								message: 'Добавьте описание вашего вопроса'
							}
						})} 
						placeholder='Ваш вопрос' 
						spellCheck
						error={errors.message}
						/>
				</label>
			</div>

			<div className={styles.date}>
					<Input 
						{...register('datetime', {
							
						})} 
						type='datetime-local'
						value={date()}
					/>
			</div>

			<div className={styles.submit}>
				<Button type='submit' appearence='primary'>Отправить</Button>
			</div>
			
			{isSuccess && 
				<div className={styles.success}>
					<div>Ваша заявка успешно отправлена. В ближайшее время с вами свяжется наш сотрудник.</div>
				</div>
			}

			{error && 
				<div className={styles.error}>
					<div>Ошибка отправки сообщения. {error}</div>
				</div>
			}
			
		</form>
	);
}