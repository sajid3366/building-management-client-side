import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Announcements = () => {
    const handleCreateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const difficulty = form.difficulty.value;
        const mark = parseInt(form.mark.value);
        const date = form.date.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const email = user.email;
        console.log(mark);
    }
    return (
        <div>
            <SectionTitle heading="Announcements"></SectionTitle>
            <div className='bg-white px-2 lg:px-[140px] py-12 mt-12 mb-12 rounded-md'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Make A Announcements</h1>

            <form onSubmit={handleCreateAssignment}>
                <div className="">
                    <div className='w-full'>
                        <p>Announcement Title</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Assignment Name' required type="text" name="title" id="" />

                    </div>
                    

                </div>

                <div className='flex gap-4 mb-8'>
                    <div className='w-1/2'>
                        <p>Mark</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Mark' type="text" required name="mark" id="" />
                        
                    </div>

                    

                </div>
               

                <input className='btn btn-block bg-slate-300' type="submit" value="Creat Assignment" />
            </form>

        </div>
        </div>
    );
};

export default Announcements;