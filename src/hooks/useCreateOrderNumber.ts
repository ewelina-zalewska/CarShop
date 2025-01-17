export const useCreateOrderNumber = () => {
	const randomId = Math.round(Math.random() * 10000);
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const OrderNo = `Z${year}${month}${randomId}`;

	return OrderNo;
};
