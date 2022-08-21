import React from "react";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
const people = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    className: "Potions",
    email: "harry.potter@gmail.com",
    image:
      "data:image/jpeg;base64,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",
    taught: "Professors Snape",
  },
  {
    name: "Draco Malfoy",
    house: "Slytherin",
    className: "Transfiguration",
    email: "draco.Malfoy@gmail.com",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADwAPAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAFBgcEAgEDAP/EADQQAAIBAgQDBAgGAwAAAAAAAAECAwQRAAUSIQYxYRNBUYEHFCIyQnGhwSNSkbHR4RWS8f/EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/EACARAAICAgMAAwEAAAAAAAAAAAABAhEDIRIxQTJCYQT/2gAMAwEAAhEDEQA/ADua0zPXxyxymTUgkDxrp7BuZXr88dVdQWhivK3tNYe2STbv/rBT/EVdS8tREQt/cMragPkBywNlo5aWqiR2i2Psk7nr8sctu3YrLuzZk+VTZiAeyKrISJdNlsO4km/f3Dn0wy0vDVBBTiCaSaXcs15SNR8jgJl2apl+V5m7yqjIQdTtZQCDjHBxnTgxSVM0Y1bBi4Ck93kfpfBozxpJNDmLA5Q5IL5rwhR6lq6EyiSIE9m8jMGHmb4mnEUiPVuRpOn3R43++KnBxNAbgqQOa7cxiXcTmJM4qIoT2iaib/lvc/wPLG5OL+JHBw8BMaOr6hYWI3vzwdpVDRBijG/XpgEAdjqCnqd8EYKmeGPQsZcA+8DgT2Qs1EKeKFI4iANPjgfW5TSVs0h7ZUmA1C/h44BUNWq1EcVRqC8iRjSK5aetqqvLI6l0VeyMZIKM55Eb3FsRJKuQqmn2LSQCnzeaknW8VSjIwccwRcc+oGMyZfkklBS0jU8rNBKCNxdb93UX7hgrJl1fWZktVmDpTqWQetVL6VvtYJ4nwtjitp0yvP6im9WKh2/Du2xW+x5ft341JVUvDpfwyVOJtzN4aLJmaMMkcdguggWN9l8/oAcTaqmd3djY2Gok8yTih8SZTUT5NDUUsckwgmF1UH2rjc2Hh9L4Qa5ESPSzqJJGA28AcW7TKzS5So4gf2bhLgjbrghFEZF1EA+WMsEUXYrpBIHs3Hft/eCtL2ixWWFWANrnA5SA8Rgr56rLqRswejE0MRuwLaLgcwCeRtfA3MfSfRUo0ZFlxVDssspF/nblgb6ZK+Ohkp8gpXLNp9YqmJ7zso/QE+YxOaZy6aT8JvhuCXouo6sYuKeL63Oss0VD3aWcl7fCqkkAf7n9MF6bjLPcznymVWjq/V4UiNK6Ke3lW+onbYso59wv1xPHa6tfGrK680EjSab6o2S45oSNmHUfc4I9m1aWi9+kXiIU3DWVS5W7wS1VQOzTSNY0oxK28QbbeOJonEGVTT1MmZSOJgqervBHdSSx1atShrBdO3jfphZz7iKv4hqKWfMpi/q0fZRKDsigb+Z7z/GBy3ca25k4jSemWu7KRTqlTCHgkWUbG6m4N/8AmCCQuoIW4F+Vr/fE5yvNZqBhpZmiD3ePxG1/PFJopYZqZJUZXRxqVvEYRy4+L/A0WTzjWufMuK83qnOz1DBN/hX2V+gGA1I349vzKw+mPrXMXqWdjdmuTjNS7VKDr9sOLQH6nL/FjxDpFiLqeePG5n5D9sflPdjRD0jS6gNdW5YYuFsqjzVpIZhs0bmM9poswdBe9j4nC2NiB1GChZo8lpGjZlLyShtJtcauXy2xaIzKQ0csqt7ysQR1Gxw2cJ1csWWunbKqiY6Qx7rD73wnQgEk25YKUdTJFEVQgAm+BtWETP/Z",
    taught: "Professor McGonagall",
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    className: "Divination",
    email: "hermione.granger@gmail.com",
    image: "data:image/jpeg;base64,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",
    taught: "Professor Trelawney",
  },
  {
    name: "Luna Lovegood",
    house: "Ravenclaw",
    className: "Charms",
    email: "luna.lovegood@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUmKiZBikrEBUhMA_CKtODqJNRR66ZIZWBAEuuFLM-p80K4nv5dW2&usqp=CAE&s",
    taught: "Professor Flitwick",
  },
  { 
    name: "Ronald Weasley",
    house: "Gryffindor",
    className: "History of Magic",
    email: "ronald.weasley@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKC0VTppmHRQbFbSoA4fRZNJIo6kklHO5zh_5W1odxg&s",
    taught: "Professor Binns",
  },
  {
    name: "Neville Longbottom",
    house: "Gryffindor",
    className: "Herbology",
    email: "severus.snape@gmail.com",
    image: "data:image/jpeg;base64,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",
    taught: "Professor Sinistra", 
  }, 
  {
    name: "Cho Chang",
    house: "Ravenclaw",
    className: "Apparition",
    email: "cho.chang@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6M3r2TVej6qJP7GuYuwjXLtOOcNobPB9EW8DA_7WL&s",
    taught: "Professor Twycross",
  },
  {
    name: "Lavender Brown",
    house: "Gryffindor",
    className: "Astronomy",
    email: "lavender.brown@gmail.com",
    image: "data:image/jpeg;base64,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",
    taught: "Professor Vector",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
    className: "Arithmancy",
    email: "cedric.diggory@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE00fnQIOPmN66s8oT69Pz1Q47kOlk0OC_sLxSSJ8Fpg&s",
    taught: "Professor Sprout",
  },
  {
    name: "Fred Weasley",
    house: "Gryffindor",
    className: "Ancient Runes",
    email: "fred.weasley@gmail.com",
    image: "data:image/jpeg;base64,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",
    taught: "Professor Sprout",
  },
];

/*  th===table header
    tr===table row
    td===table data
*/
export default function App() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500  tracking-wider"
                  >
                    House
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500  tracking-wider"
                  >
                    Email
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500  tracking-wider"
                  >
                    Class Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500  tracking-wider"
                  >
                    Taught by
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500  tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>


              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>

                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {person.house}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {person.email}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.className}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <div className="text-sm text-gray-500">
                        {person.taught}
                      </div>
                    </td>

                    <td>
                    <button className=" space-x-2 align-middle">
                      <CreateOutlinedIcon className=" bg-green-300" />
                      <DeleteForeverOutlinedIcon className=" bg-red-300" />
                    </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
 