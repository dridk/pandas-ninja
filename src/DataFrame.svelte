<script lang="ts">

import ToolBar from "./ToolBar.svelte"

export let title:string = "Noname";

</script>


<ToolBar>


 <div class="flex justify-between items-center h-full p-4">

  <h2>{title}</h2>

  <button class="btn btn-sm btn-square btn-ghost">
    
    <svg style="width:16px;height:16px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,3H14.82C14.25,1.44 12.53,0.64 11,1.2C10.14,1.5 9.5,2.16 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M17,11H7V9H17V11M15,15H7V13H15V15Z" />
</svg>

  </button>

</div>



</ToolBar>


<div class="overflow-x-auto overflow-y-auto h-full" >
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th> 
        <td>Hart Hagerty</td> 
        <td>Desktop Support Technician</td> 
        <td>Zemlak, Daniel and Leannon</td> 
        <td>United States</td> 
        <td>12/5/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th> 
        <td>Brice Swyre</td> 
        <td>Tax Accountant</td> 
        <td>Carroll Group</td> 
        <td>China</td> 
        <td>8/15/2020</td> 
        <td>Red</td>
      </tr>
      <tr>
        <th>4</th> 
        <td>Marjy Ferencz</td> 
        <td>Office Assistant I</td> 
        <td>Rowe-Schoen</td> 
        <td>Russia</td> 
        <td>3/25/2021</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>5</th> 
        <td>Yancy Tear</td> 
        <td>Community Outreach Specialist</td> 
        <td>Wyman-Ledner</td> 
        <td>Brazil</td> 
        <td>5/22/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>6</th> 
        <td>Irma Vasilik</td> 
        <td>Editor</td> 
        <td>Wiza, Bins and Emard</td> 
        <td>Venezuela</td> 
        <td>12/8/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>7</th> 
        <td>Meghann Durtnal</td> 
        <td>Staff Accountant IV</td> 
        <td>Schuster-Schimmel</td> 
        <td>Philippines</td> 
        <td>2/17/2021</td> 
        <td>Yellow</td>
      </tr>
      <tr>
        <th>8</th> 
        <td>Sammy Seston</td> 
        <td>Accountant I</td> 
        <td>O'Hara, Welch and Keebler</td> 
        <td>Indonesia</td> 
        <td>5/23/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>9</th> 
        <td>Lesya Tinham</td> 
        <td>Safety Technician IV</td> 
        <td>Turner-Kuhlman</td> 
        <td>Philippines</td> 
        <td>2/21/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>10</th> 
        <td>Zaneta Tewkesbury</td> 
        <td>VP Marketing</td> 
        <td>Sauer LLC</td> 
        <td>Chad</td> 
        <td>6/23/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>11</th> 
        <td>Andy Tipple</td> 
        <td>Librarian</td> 
        <td>Hilpert Group</td> 
        <td>Poland</td> 
        <td>7/9/2020</td> 
        <td>Indigo</td>
      </tr>
      <tr>
        <th>12</th> 
        <td>Sophi Biles</td> 
        <td>Recruiting Manager</td> 
        <td>Gutmann Inc</td> 
        <td>Indonesia</td> 
        <td>2/12/2021</td> 
        <td>Maroon</td>
      </tr>
      <tr>
        <th>13</th> 
        <td>Florida Garces</td> 
        <td>Web Developer IV</td> 
        <td>Gaylord, Pacocha and Baumbach</td> 
        <td>Poland</td> 
        <td>5/31/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>14</th> 
        <td>Maribeth Popping</td> 
        <td>Analyst Programmer</td> 
        <td>Deckow-Pouros</td> 
        <td>Portugal</td> 
        <td>4/27/2021</td> 
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>15</th> 
        <td>Moritz Dryburgh</td> 
        <td>Dental Hygienist</td> 
        <td>Schiller, Cole and Hackett</td> 
        <td>Sri Lanka</td> 
        <td>8/8/2020</td> 
        <td>Crimson</td>
      </tr>
      <tr>
        <th>16</th> 
        <td>Reid Semiras</td> 
        <td>Teacher</td> 
        <td>Sporer, Sipes and Rogahn</td> 
        <td>Poland</td> 
        <td>7/30/2020</td> 
        <td>Green</td>
      </tr>
      <tr>
        <th>17</th> 
        <td>Alec Lethby</td> 
        <td>Teacher</td> 
        <td>Reichel, Glover and Hamill</td> 
        <td>China</td> 
        <td>2/28/2021</td> 
        <td>Khaki</td>
      </tr>
      <tr>
        <th>18</th> 
        <td>Aland Wilber</td> 
        <td>Quality Control Specialist</td> 
        <td>Kshlerin, Rogahn and Swaniawski</td> 
        <td>Czech Republic</td> 
        <td>9/29/2020</td> 
        <td>Purple</td>
      </tr>
      <tr>
        <th>19</th> 
        <td>Teddie Duerden</td> 
        <td>Staff Accountant III</td> 
        <td>Pouros, Ullrich and Windler</td> 
        <td>France</td> 
        <td>10/27/2020</td> 
        <td>Aquamarine</td>
      </tr>
      <tr>
        <th>20</th> 
        <td>Lorelei Blackstone</td> 
        <td>Data Coordiator</td> 
        <td>Witting, Kutch and Greenfelder</td> 
        <td>Kazakhstan</td> 
        <td>6/3/2020</td> 
        <td>Red</td>
      </tr>
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>