export interface User {
	id: number,
	username: string,
	userInfo: UserInfo,
}

export interface UserInfo {
	image: string,
	first_name: string,
	second_name: string,
	patronymic: string,
	phone: string,
	email: string,
}