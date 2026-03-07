import toast from 'react-hot-toast';

export function singleToast(message: string, type: 'success' | 'error' = 'success') {
  toast.dismiss();
  toast[type](message);
}
