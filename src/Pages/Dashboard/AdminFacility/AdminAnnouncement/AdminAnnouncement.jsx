import Swal from 'sweetalert2';
import SectionTitle from '../../../../Shared/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AdminAnnouncement = () => {
    const axiosSecure = useAxiosSecure();
    const handleCreateAssignment = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const announcement = {
            title, description
        }

        console.log(announcement);
        axiosSecure.post('/announcement', announcement)
        .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Announcement has Publish',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                form.reset();
            }
        })
    }
    return (
        <div>
            <SectionTitle heading="Make A Announcements"></SectionTitle>
            <div className=' px-2 lg:px-[140px] pb-12 mt-12'>
                <form onSubmit={handleCreateAssignment}>
                    <div className="mb-5">
                        <div className='w-full'>
                            <p>Announcement Title</p>
                            <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Assignment Name' required type="text" name="title" id="" />

                        </div>

                    </div>

                    <div>
                        <div className='w-full'>
                            <p>Description</p>
                            <textarea placeholder='Short Description ' className='border-2 px-4 py-2 mt-2' name="description" id="" cols="72" rows="8"></textarea>

                        </div>

                    </div>

                    <input className='btn btn-block bg-slate-300' type="submit" value="Publish" />
                </form>

            </div>
        </div>
    );
};

export default AdminAnnouncement;