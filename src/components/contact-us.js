import { message } from "antd";
const ContactUs = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const FormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const submittedData = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }
        if(submittedData.name == "" || submittedData.email == "" || submittedData.message == ""){
            messageApi.error("Please fill in all fields to submit a message!", 4)
            return;
        }
        console.log(`Submitted data:`)
        console.table(submittedData);
    }
    return (
        <>
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl w-[820px] h-auto px-16 pt-12 pb-10 font-[Inter]">
                <form onSubmit={FormSubmit}>
                    <div className="flex w-full justify-center items-center flex-col px-4">
                        <h1 className="font-bold dark:text-white text-2xl">Say Hello!</h1>
                        <div className="text-[18px] w-full">
                            <div className="py-6 w-full">
                                <input name="name" id="name" className="w-full dark:bg-[#1E1E1E] border-b-[1.5px] border-black focus:outline-none" type={"text"} placeholder="Your Name" />
                            </div>
                            <div className="py-6 w-full">
                                <input type="email" id="email" className="w-full dark:bg-[#1E1E1E] border-b-[1.5px] border-black focus:outline-none" name="email" placeholder="Your Email" />
                            </div>
                            <div className="py-6 w-full">
                                <textarea type="text" rows={6} id="message" className="w-full dark:bg-[#1E1E1E] border-b-[1.5px] border-black focus:outline-none resize-none" name="message" placeholder="Your Message"></textarea>
                            </div>
                            <div className="pt-4 w-full">
                                <button className="rounded-full font-medium contact-btn text-white px-8 py-4">Send message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {contextHolder}
        </>
    )
}
export default ContactUs;