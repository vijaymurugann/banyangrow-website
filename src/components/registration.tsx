import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white p-4">
      <Card className="max-w-md md:max-w-lg lg:max-w-xl bg-gray-900 p-6 rounded-2xl shadow-lg">
        <CardContent>
          <img src="/mnt/data/Register.png" alt="Banyan Grow" className="w-full rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">Invest. Earn. Grow.</h2>
          <p className="text-gray-400 text-sm mt-2">
            Take control of your financial future with Banyan Grow’s secure and rewarding ecosystem.
            Secure, transparent, and designed for growth.
          </p>
        </CardContent>
      </Card>
      
      <Card className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-lg mt-8 md:mt-0 md:ml-8">
        <h2 className="text-3xl font-bold">Create Your Account</h2>
        <p className="text-gray-400 text-sm mt-2">
          Join Banyan Grow and unlock exclusive investment opportunities.
        </p>
        <div className="mt-6">
          <label className="block text-sm font-medium">Email</label>
          <Input type="email" placeholder="example@email.com" className="mt-2 bg-gray-800 text-white" />
          <div className="flex items-center mt-4">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree with the <span className="text-yellow-500">Terms & Conditions</span>
            </label>
          </div>
          <Button className="w-full bg-yellow-500 text-black font-semibold mt-4 py-2 rounded-lg">Sign Up</Button>
          <p className="text-gray-400 text-sm mt-4 text-center">
            Already have an account? <span className="text-yellow-500 cursor-pointer">Sign in</span>
          </p>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <Button className="flex items-center space-x-2 bg-gray-800 py-2 px-4 rounded-lg">
              <FaGoogle /> <span>Sign up with Google</span>
            </Button>
            <Button className="flex items-center space-x-2 bg-gray-800 py-2 px-4 rounded-lg">
              <FaFacebook /> <span>Sign up with Facebook</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
