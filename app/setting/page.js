import Sidebar from "@/app/components/sidebar";
import { Avatar, Card, FormControl, Button } from "@rewind-ui/core";

export default function Messages() {
  return (
    <div className="h-screen">
      <Sidebar>
        <div className="flex h-screen flex-col items-center md:justify-center">
          <Card radius="md" className="w-full py-5 lg:w-2/5">
            <Card.Body>
              <div className="flex items-center justify-center gap-x-3">
                <Avatar size="lg" />
                <div>
                  <h1 className="text-xl font-bold">Name Name</h1>
                  <h1 className="font-light text-gray-500">@account</h1>
                </div>
              </div>
              <form>
                <FormControl className="mt-5">
                  <FormControl.Label className="font-medium">
                    First Name
                  </FormControl.Label>
                  <FormControl.Input />
                </FormControl>
                <FormControl className="mt-5">
                  <FormControl.Label className="font-medium">
                    Last Name
                  </FormControl.Label>
                  <FormControl.Input />
                </FormControl>
                <FormControl className="mt-5">
                  <FormControl.Label className="font-medium">
                    Email
                  </FormControl.Label>
                  <FormControl.Input />
                </FormControl>
                <FormControl className="mt-5">
                  <FormControl.Label className="font-medium">
                    New Password
                  </FormControl.Label>
                  <FormControl.Input />
                </FormControl>
                <FormControl className="mt-5">
                  <FormControl.Label className="font-medium">
                    Confirm Password
                  </FormControl.Label>
                  <FormControl.Input />
                </FormControl>
                <Button className="mt-5 w-full bg-primary">Save</Button>
              </form>
            </Card.Body>
          </Card>
        </div>
      </Sidebar>
    </div>
  );
}
